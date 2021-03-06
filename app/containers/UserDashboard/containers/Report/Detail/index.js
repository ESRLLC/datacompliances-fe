import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  } from 'semantic-ui-react';
import { clearMessage } from './actions';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './sagas';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import DoughnutChart from './DoughnutChart'
import { Button } from 'semantic-ui-react'


import 'c3/c3.css';
import c3 from 'c3';
import './style.scss';

//......................................mock data c3js...........................................

const dataC3doughnut = [
  { _id: 1111, total: 10, compliance: 4, tag_name: 'Identify' },
  { _id: 2222, total: 5, compliance: 3, tag_name: 'Protect' },
  { _id: 3333, total: 6, compliance: 4, tag_name: 'Detect' },
  { _id: 4444, total: 3, compliance: 2, tag_name: 'Respond' },
  { _id: 5555, total: 5, compliance: 3, tag_name:  'Recover' },
  { _id: 6666, total: 62, compliance: 40, tag_name: 'PCI' },
];


// const columns = [
//   [30, 200, 100, 400, 150],
// ];

const dataBar = [
  { _id: 1111, value: 4, tag_name: 'Identify' },
  { _id: 2222, value: 6, tag_name: 'Protect' },
  { _id: 3333, value: 14, tag_name: 'Detect' },
  { _id: 4444, value: 10, tag_name: 'Respond' },
  { _id: 5555, value: 7, tag_name: 'Recover' },
]


//......................................mock data c3js...........................................

import {
  makeSelectError,
  makeSelectResponse,
  makeSelectGraphData,
  makeSelectLoading
} from './selectors';

import {
  getGraphDataRequest,
  downloadReportRequest
} from './actions'

const mapStateToProps = createStructuredSelector({
  successResponse: makeSelectResponse(),
  isRequesting: makeSelectLoading(),
  errorResponse: makeSelectError(),
  graphData:makeSelectGraphData()
});

const mapDispatchToProps = dispatch => ({
  clearMessage: () => dispatch(clearMessage()),
  getGraphDataRequest: (id) => dispatch(getGraphDataRequest(id)),
  downloadReportRequest: (id) => dispatch(downloadReportRequest(id))
});

class NewReferral extends React.Component {
  state = {
    complianceTotal: 0,
    pciTotal: 0,
    data: {},
    errors: {},
    close: true,
    graphData: []
  };

  componentDidMount() {
    // this.updateChart();
    // this.updateChart2();
    this.props.getGraphDataRequest(this.props.match.params.id)

  }
  componentDidUpdate() {
     // this.props.getGraphDataRequest()
    // this.updateChart(this.props.graphData);
     // this.updateChart2();
  }


  componentWillUnmount() {
    this.props.clearMessage();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.graphData != this.props.graphData) {
      this.setState({
        graphData: nextProps.graphData ? nextProps.graphData : '',
      }, () => {
         !this.props.isRequesting && this.updateChart(this.state.graphData);
         var a = 0
         var b = 0
         var pciA = 0
         var pciB = 0
         nextProps.graphData && nextProps.graphData.dataList && nextProps.graphData.dataList.map((item) => {
         a = a + item.compliance
         b = b + item.total
         if(item.tag_name == 'PCI') {
           pciA = pciA + item.compliance
           pciB = pciB + item.total
         }
     })
         const total_compliance = ((a*100) / b)
         const pci_compliance = ((pciA*100) / pciB)
         
          if(b != 0){
            this.setState({complianceTotal: b}, ()=> {!this.props.isRequesting && this.updateChart2(total_compliance);})
            
          }
          if(pciB != 0) {
            this.setState({pciTotal: pciB}, ()=> { !this.props.isRequesting && this.updateChart3(pci_compliance);})
          }
      });
    }
    // if (nextProps.errorResponse != this.props.errorResponse) {
    //   this.setState({
    //     errorResponse: nextProps.errorResponse ? nextProps.errorResponse : '',
    //   });
    // }
    // if (nextProps.successResponse != this.props.successResponse) {
    //   this.setState({
    //     successResponse: nextProps.successResponse
    //       ? nextProps.successResponse
    //       : '',
    //   });
    // }
  }


  updateChart2 = (data) => {
    if(true) {
      
    // if(!Number.isNaN(data) && data !== undefined) {
    const rValue = Math.round(data)
    var chart2 = c3.generate({
    bindto: '#chart2',
      data: {
          columns: [
            rValue <= 29 ? ['Poor', rValue] : 
            (rValue > 29 && rValue <= 60) ? ['Fair', rValue] :
             (rValue > 60 && rValue < 90) ? ['Good',rValue] :
              ['Excellent', rValue]
          ],
          type: 'gauge',

      },
      gauge: {
        label:{
        format: function(value, ratio){
          return value; //returning here the value and not the ratio
          },
        },
        },
      color: {
          pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
          threshold: {
  //            unit: 'value', // percentage is default
  //            max: 200, // 100 is default
              values: [30, 60, 90, 100]
          }
      },
      size: {
          height: 180
      },
  });
    }
  }

  updateChart3 = (data) => {
    if(true) {
    // if(!Number.isNaN(data) && data !== undefined) {
    const rValue = Math.round(data)
    var chart2 = c3.generate({
    bindto: '#chart3',
      data: {
          columns: [
            rValue < 29 ? ['Poor', rValue] : 
            (rValue > 29 && rValue < 60) ? ['Fair', rValue] :
             (rValue > 59 && rValue < 90) ? ['Good',rValue] :
              ['Excellent', rValue]
          ],
          type: 'gauge',

      },
      gauge: {
        label:{
        format: function(value, ratio){
          return value; //returning here the value and not the ratio
          },
        },
        },
      color: {
          pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
          threshold: {
  //            unit: 'value', // percentage is default
  //            max: 200, // 100 is default
              values: [30, 60, 90, 100]
          }
      },
      size: {
          height: 180
      },
  });
    }
  }
//
  updateChart = (data) => {
    if(data) {
    var arrC3 = []
    data && data.dataList && data.dataList.map((item) => {
      Object.keys(item).map((val) => {
        if(val === 'tag_name') {
            arrC3.push(item.tag_name)
        }
      })
    })
  // var colorScale = d3.scale.category10();
  const chart = c3.generate({
    bindto: '#chart',
    color: {
      pattern: ['#008080', '#ff6347','#50EF0B', '#FFA500','#27C3E3 ', '#ffa500']
    },
    data: {
      json: data.dataList,
      // columns: [arrC3],
      type: 'bar',
      color: function(inColor, data) {
        var colors = ['#008080', '#ff6347','#50EF0B', '#FFA500','#27C3E3 ', '#ffa500'];
        if(data.index !== undefined) {
            return colors[data.index];
        }
      },
      keys: {
        value: ['total'],
      },
    },
    axis: {
      x: {
          type: 'category',
          categories: arrC3
      }
  },
  legend: {
    show: false
  }
  });
}
}

 downloadReport = () => {
    this.props.downloadReportRequest(this.props.match.params.id)
 }

  render() {
    const { data, errors, graphData, pciTotal, complianceTotal } = this.state;
    const { isRequesting, errorResponse, successResponse } = this.props;
    return (
      <div>
        {!isRequesting ? 
        <div className="graphs">
          {/* <Button color="green" onClick={this.downloadReport}>Download Report</Button> */}
          <div className="clearfix">
            <div className="bar-graph mb-5 mr-3" >
              <p className="chart-title">Number of NIST and PCI Controls Assessed</p>
              <div style={{width: '100%'}} id="chart">Bar Graph</div>
            </div>
          </div>
          <div className="doughnut-graph">
           {graphData && graphData.dataList && graphData.dataList.map((item, index) => {
              return <DoughnutChart key={index} each={item} /> ;
           })
           }
           </div>
           {pciTotal != 0 &&
           <div className="clearfix">
            <div className="gauge-chart mb-5 mt-5">
              <p className="chart-title">PCI Score</p>
              <div style={{width: '100%'}} id="chart3">No PCI score available</div>
            </div>
          </div>
           }
           {complianceTotal &&
          <div className="clearfix">
            <div className="gauge-chart mb-5 mt-5">
              <p className="chart-title">Privacy and Cyber Security Score</p>
              <div style={{width: '100%'}} id="chart2">Gauge Graph</div>
            </div>
          </div>
            }
        </div>
           
        :
        <div className="product-grid">
          <div className="ui segment">
          <div className="ui active inverted dimmer">
            <div className="ui small text loader">Loading.....</div>
          </div>
          <p></p>
        </div>
        </div>
        }
      </div>
    );
  }
}



const withReducer = injectReducer({ key: 'reportDetail', reducer });
const withSaga = injectSaga({ key: 'reportDetail', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewReferral);



