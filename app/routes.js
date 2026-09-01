//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Prototype 1 - Referral type
router.post('/prototype1/referral-type', (req, res) => {
        if(req.session.data['referral-type'] == 'A fraud referral'){
    res.redirect('who-do-you-want-to-report')
        } else {
    res.redirect('contract-id-claim-live')
    }   
});

// Prototype 1 - Contract ID still live
router.post('/prototype1/contract-id-claim-live-check', (req, res) => {
        if(req.session.data['contract-id-claim-live-check'] == 'Yes'){
    res.redirect('what-is-your-role')
        } else {
    res.redirect('frf-redirect-interstitial')
    }   
});