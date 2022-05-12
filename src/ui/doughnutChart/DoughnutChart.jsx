/*
 * Filename: DoughnutChart.jsx
 * Path: cdeals-web-app
 * Created Date: Friday, December 10th 2021, 11:36:29 am
 * Author: Mouni <mouni.nagarajan@nutechnologyinc.com>
 *
 * Copyright (c) 2021 All rights reserved
 */

import { object } from 'prop-types';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Row } from '@UI/layout';
import Typography from '@UI/typography/Typography';
import styles from './DoughnutChart.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * DoughnutChart Component
 * @param {object} chartData - chart data value and text eg: dataSet1: { value: '44',  text: 'Savings'}
 * @param {object} chartColors - Chart colors
 * @returns {*}
 * @constructor
 */
const DoughnutChart = ({ chartData, chartColors }) => {
  const { dataSet1, dataSet2, dataSet3, dataSet4 } = chartData;

  const data = {
    datasets: [
      {
        label: 'VIP Savings Calculation',
        data: [dataSet1?.value, dataSet2?.value, dataSet3?.value],
        borderColor: [chartColors?.color1, chartColors?.color2, chartColors?.color3],
        borderWidth: 19,
        weight: '0',
      },
    ],
  };

  if (!chartData) return null;

  return (
    <Row alignItems="center" justifyContent="center" className={styles.donghnutContainer}>
      <div className={styles.donghnutDataset3}>
        <Typography variant="h5">{`$ ${dataSet3?.value}`}</Typography>
        <Typography variant="h5">{dataSet3?.text}</Typography>
      </div>
      <div className={styles.donghnutDataset2}>
        <Typography variant="h5">{`$ ${dataSet2?.value}`}</Typography>
        <Typography variant="h5">{dataSet2?.text}</Typography>
      </div>
      <div className={styles.donghnutDataset1}>
        <Typography variant="h5">{`$ ${dataSet1?.value}`}</Typography>
        <Typography variant="h5">{dataSet1?.text}</Typography>
      </div>
      <div className={styles.donghnutTotalSavings}>
        <Typography variant="h5">{dataSet4?.text}</Typography>
        <Typography
          className={styles.donghnutTotalAmount}
          variant="h1"
        >{`$ ${dataSet4?.value}`}</Typography>
        <Typography variant="h5">{dataSet4?.subText}</Typography>
      </div>
      <div className={styles.donghnutChart}>
        <Doughnut data={data} />
      </div>
    </Row>
  );
};

DoughnutChart.propTypes = {
  chartData: object.isRequired,
  chartColors: object,
};

DoughnutChart.defaultProps = {
  chartColors: {
    color1: 'rgb(49 86 96)',
    color2: 'rgb(79, 195, 227)',
    color3: 'rgb(118 185 203)',
  },
};
export default DoughnutChart;
