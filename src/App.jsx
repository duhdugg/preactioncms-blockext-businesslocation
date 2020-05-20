import Component from './Component.jsx'
import React from 'react'
import './App.css'

const mockPreaction = {
  appRoot: '',
  block: { settings: {} },
  editable: false,
  settings: { siteTitle: 'Site Title' },
  page: { settings: {} },
  navigate: (path) => {
    console.debug(`navigate('${path}')`)
  },
}

function App() {
  return (
    <div className='App'>
      <main>
        <div className='row'>
          <div className='col-6'>
            <Component
              preaction={mockPreaction}
              businessName='Boston Public Library'
              address={{
                street: '700 Boylston St',
                city: 'Boston',
                state: 'MA',
                zip: '02116',
              }}
              phone={'555-555-55555'}
              hours={{
                sunday: 'Closed',
                monday: '9:00 AM - 5:00 PM',
                tuesday: '9:00 AM - 5:00 PM',
                wednesday: '9:00 AM - 5:00 PM',
                thursday: '9:00 AM - 5:00 PM',
                friday: '9:00 AM - 5:00 PM',
                saturday: '9:00 AM - 5:00 PM',
              }}
              iframe='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1026.734863965557!2d-71.07757761192721!3d42.349041461518446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a0c429bf853%3A0xb9d45dfe5bc1ac73!2sBoston%20Public%20Library!5e0!3m2!1sen!2sus!4v1590005389829!5m2!1sen!2sus'
            />
          </div>
          <div className='col-6'>
            <Component
              preaction={mockPreaction}
              businessName='Business Name'
              address={{
                street: '1234 Example Street',
                city: 'Pawnee',
                state: 'In',
                zip: '46240',
              }}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
