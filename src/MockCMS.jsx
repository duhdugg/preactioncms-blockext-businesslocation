import BusinessLocation from './BusinessLocation.jsx'
import BusinessLocationSettings from './BusinessLocationSettings.jsx'
import { Boilerplate, Card } from '@preaction/bootstrap-clips'
import React from 'react'
import './mockcms.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@preaction/bootstrap-clips/dist/preaction-bootstrap-clips.css'

BusinessLocation.Settings = BusinessLocationSettings

const mockPropsData = {
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
      propsData: mockPropsData,
    },
  },
  editable: false,
  settings: { siteTitle: 'Preaction CMS Extension Testing' },
  page: { settings: {} },
  navigate: (path) => {
    console.debug(`navigate('${path}')`)
  },
}

const copyObj = (obj) => JSON.parse(JSON.stringify(obj))

// emulates how the component is rendered in Preaction CMS
function MockCMS(props) {
  // STATE
  const [propsData, setPropsData] = React.useState(mockPropsData)
  const [preaction] = React.useState(mockPreaction)
  // CALLBACKS
  const getPropsDataValueHandler = React.useCallback(
    (key) => {
      return (value) => {
        const pd = copyObj(propsData)
        pd[key] = value
        setPropsData(pd)
      }
    },
    [propsData]
  )
  // RENDER
  return (
    <div className='App'>
      <Boilerplate
        footer={
          <Card header='Settings View' headerTheme='dark'>
            <BusinessLocation.Settings
              propsData={propsData}
              getPropsDataValueHandler={getPropsDataValueHandler}
            />
          </Card>
        }
      >
        <Card header={preaction.block.settings.header} headerTheme='blue'>
          <BusinessLocation preaction={preaction} {...propsData} />
        </Card>
      </Boilerplate>
    </div>
  )
}

export default MockCMS
