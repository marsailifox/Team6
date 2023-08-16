require('dotenv').config();
require('./config/database');
const mongoose = require('mongoose');
const fs = require('fs');
const csvParser = require('csv-parser');
const Loan = require('./models/loan')
const path = require('path');

// (async function() {
//     const data = await Loan.create([
//         { person_age: 21, person_income: 9600, person_emp_length: 5.0, loan_amnt: 1000, cb_person_default_on_file: 0, cb_person_cred_hist_length: 2, other_payments: 5985, percent_of_income: 0.2766251728907331, loan_status: 'no' },
//         { person_age: 23, person_income: 65500, person_emp_length: 4.0, loan_amnt: 35000, cb_person_default_on_file: 0, cb_person_cred_hist_length: 2, other_payments: 1952, percent_of_income: 0.5507647762321395, loan_status: 'no' },
//         { person_age: 24, person_income: 54400, person_emp_length: 8.0, loan_amnt: 35000, cb_person_default_on_file: 1, cb_person_cred_hist_length: 4, other_payments: 6483, percent_of_income: 0.7304297013585992, loan_status: 'no' },
//         { person_age: 24, person_income: 41000, person_emp_length: 2.0, loan_amnt: 25000, cb_person_default_on_file: 0, cb_person_cred_hist_length: 3, other_payments: 6108, percent_of_income: 0.7164966181359624, loan_status: 'no' },
//         { person_age: 25, person_income: 12816, person_emp_length: 0.0, loan_amnt: 3000, cb_person_default_on_file: 1, cb_person_cred_hist_length: 4, other_payments: 3088, percent_of_income: 0.30838815789473684, loan_status: 'no' },
//         { person_age: 24, person_income: 12960, person_emp_length: 1.0, loan_amnt: 3650, cb_person_default_on_file: 0, cb_person_cred_hist_length: 3, other_payments: 6106, percent_of_income: 0.5325357455500438, loan_status: 'no' },
//         { person_age: 26, person_income: 226000, person_emp_length: 4.0, loan_amnt: 20000, cb_person_default_on_file: 0, cb_person_cred_hist_length: 4, other_payments: 13974, percent_of_income: 0.09432805410657183, loan_status: 'yes' },
//         { person_age: 25, person_income: 225000, person_emp_length: 0.0, loan_amnt: 30000, cb_person_default_on_file: 1, cb_person_cred_hist_length: 2, other_payments: 3743, percent_of_income: 0.13558893051971238, loan_status: 'yes' },
//         { person_age: 26, person_income: 213000, person_emp_length: 6.0, loan_amnt: 35000, cb_person_default_on_file: 0, cb_person_cred_hist_length: 2, other_payments: 5411, percent_of_income: 0.16860238259252658, loan_status: 'yes' },
//         { person_age: 24, person_income: 225000, person_emp_length: 0.0, loan_amnt: 6000, cb_person_default_on_file: 0, cb_person_cred_hist_length: 4, other_payments: 24902, percent_of_income: 0.029985307199472257, loan_status: 'yes' },
//     ]);

//     console.log(data)

//     process.exit();
// })();

const csvFilePath = path.join(__dirname, './raw_data/sample.csv');

fs.createReadStream(csvFilePath)
    .pipe(csvParser())
    .on('data', async (row) => {
      try {
        const loan = new Loan({
          person_age: Number(row.person_age),
          person_income: Number(row.person_income),
          person_emp_length: Number(row.person_emp_length),
          loan_amnt: Number(row.loan_amnt),
          cb_person_default_on_file: Number(row.cb_person_default_on_file),
          cb_person_cred_hist_length: Number(row.cb_person_cred_hist_length),
          other_payments: Number(row.other_payments),
          percent_of_income: Number(row.percent_of_income),
          loan_status: row.loan_status,
        });

        try {
          await loan.save();
          console.log('Loan data saved:', loan);
        } catch (saveError) {
          console.error('Error saving loan data:', saveError);
        }
      } catch (error) {
        console.error('Error processing CSV row:', error);
      }
    })
    .on('end', () => {
      console.log('CSV data seeding completed');
    });