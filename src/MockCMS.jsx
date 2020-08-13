import { BusinessLocation } from './BusinessLocation.jsx'
import { Boilerplate, Card } from '@preaction/bootstrap-clips'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const propsData = {
  businessName: 'Boston Public Library',
  showAddress: true,
  address: {
    street: '700 Boylston St',
    city: 'Boston',
    state: 'MA',
    zip: '02116',
  },
  phone: '555-555-5555',
  showHours: true,
  hours: {
    sunday: 'Closed',
    monday: '9:00 AM - 5:00 PM',
    tuesday: '9:00 AM - 5:00 PM',
    wednesday: '9:00 AM - 5:00 PM',
    thursday: '9:00 AM - 5:00 PM',
    friday: '9:00 AM - 5:00 PM',
    saturday: '9:00 AM - 5:00 PM',
  },
  iframe:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1026.734863965557!2d-71.07757761192721!3d42.349041461518446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a0c429bf853%3A0xb9d45dfe5bc1ac73!2sBoston%20Public%20Library!5e0!3m2!1sen!2sus!4v1590005389829!5m2!1sen!2sus',
  debug: false,
}

const mockPreaction = {
  appRoot: '',
  block: {
    blockType: 'ext',
    settings: {
      header: 'Component View',
      extKey: 'BusinessLocation',
      propsData,
    },
  },
  editable: false,
  settings: { siteTitle: 'Preaction CMS Extension Testing' },
  page: { settings: {} },
  navigate: (path) => {
    console.debug(`navigate('${path}')`)
  },
}

class MockCMS extends React.Component {
  constructor(props) {
    super(props)
    this.state = { propsData, mockPreaction }
  }

  getPropsDataValueHandler(key) {
    return (value) => {
      this.setState((state) => {
        const propsData = state.propsData
        propsData[key] = value
        state.propsData = propsData
        return state
      })
    }
  }

  render() {
    // this emulates how the component is rendered in Preaction CMS
    return (
      <div className='App'>
        <Boilerplate>
          <main className='mt-3 mb-3'>
            <Card
              header={mockPreaction.block.settings.header}
              headerTheme='blue'
            >
              <BusinessLocation preaction={mockPreaction} {...propsData} />
            </Card>
          </main>
          <footer>
            <Card header='Settings View' headerTheme='dark'>
              <BusinessLocation.Settings
                propsData={propsData}
                getPropsDataValueHandler={this.getPropsDataValueHandler.bind(
                  this
                )}
              />
            </Card>
          </footer>
        </Boilerplate>
      </div>
    )
  }
}

export default MockCMS
