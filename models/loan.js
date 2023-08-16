const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loanSchema = new Schema({
    person_age: {type: Number},
    person_income: {type: Number},
    person_emp_length: {type: Number},
    loan_amnt: {type: Number},
    cb_person_default_on_file: {type: Number},
    cb_person_cred_hist_length: {type: Number},
    other_payments: {type: Number},
    percent_of_income: {type: Number},
    loan_status: {type: String}
})

module.exports = mongoose.model('Loan', loanSchema);