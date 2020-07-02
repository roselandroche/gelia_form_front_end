# Gelia Form - Customizable Survey / Call Sheet
## Front End
### This form will be used by Customer Service Professionals as they call customers. 

### Access

- Admin
    - Able to edit/add survey questions as needed
    - Able to edit all questions as needed
    - Able to retrieve and review all completed call sheets
    - Able to access overview of all call sheets in progress
        - Able to sort by customer name, address, business name
    - Has all abilities of customer service professional as well

- Customer Service Professional
    - Able to add/edit all answers to questions
    - Able to save and close (partial success to be completed on call back)
    - Able to save and submit (complete call sheet)

### Function

This form should **always** save the customers:
- Business Name
- Business Address
- Name of Contact
- Title of Contact
- Phone Number(s)
    - Texting preferences
- Email Address

On **all** call attempts, the form will save:
- Date of call attempt
- Time of call attempt
    - **Note**
        - Standard leads require 10 attempts
        - Re-engagement leads require 6 attempts
        - Specialty leads require 20 attempts
- Result of call attempt
    - Voicemail
    - Not in
    - Unavailable
    - No answer
    - Other

On **active leads**, the form will save:
- Desired product(s)
    - Model or description
- New or Used
    - If used:
        - Is there a limit to how many hours customer would like on machine?
- Would the customer like information on financing options?
    - Special rates/offers
    - Financing
    - Leasing
    - Physical damage insurance
    - etc.
- Time frame of potential purchase
    - w/in 1 month
    - 1 - 3 months
    - 3 - 6 months
    - 7 - 12 months
    - 12 +
- Intended use for machine(s)
    - General Construction
    - Concrete
    - Farm/Agriculture
    - Landscaping
    - Utilities
    - Governmental
    - etc.
- Desired attachment(s)/part(s) for machine
- Has the customer been in contact with a dealer in the past year (y/n)
- Answers to 3 optional survey questions (rotate every few months)
    - What communication would you prefer to receive from dealer?
    - What form would you like to receive this communication?
        - Email
        - Regular mail
        - Phone
        - In person
        - N/A
    - How often do you want to receive this communication?
        - Weekly
        - Monthly
        - Quarterly
        - Semi-Annually
        - Annually
- Additional notes

On **inactive leads**, the form will save:
- Answers to 3 optional survey questions (rotate every few months)
- If customer has asked to be removed from call list:
    - Would they like to continue receiving marketing emails?

### Motivation

Currently Professionals in this position rely on printed call sheets. These are inefficient to produce and to use, are easily lost or damaged, damaging to the environment, etc.

### Tech Framework

- TBD


MIT © [Rose Landroche]()