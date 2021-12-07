import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '@preaction/bootstrap-clips'
import { Checkbox, Input } from '@preaction/inputs'

function BusinessLocation(props) {
  let address = props.address || {}
  let hours = props.hours || {}
  let phone = props.phone || ''
  let showAddress = false
  let showHours = false
  for (let x of Object.keys(address)) {
    if (address[x]) {
      showAddress = true
    }
  }
  for (let x of Object.keys(hours)) {
    if (hours[x]) {
      showHours = true
    }
  }
  return (
    <div
      className='business-location-component'
      style={{
        textAlign: 'center',
      }}
    >
      <div className='business-name'>
        <strong>{props.businessName}</strong>
      </div>
      <address>
        {showAddress ? <div className='street'>{address.street}</div> : ''}
        {showAddress ? (
          <div className='city-state-zip'>
            {address.city}, {address.state} {address.zip}
          </div>
        ) : (
          ''
        )}
        {phone ? (
          <div className='phone'>
            <a href={`tel:+${phone.replace(/[^0-9]/g, '')}`}>{phone}</a>
          </div>
        ) : (
          ''
        )}
      </address>
      {showHours ? (
        <div className='hours'>
          <strong>Hours</strong>
          <dl className='row'>
            <dt className='col-6 text-right'>Sunday</dt>
            <dd className='col-6 text-left'>{hours.sunday}</dd>
            <dt className='col-6 text-right'>Monday</dt>
            <dd className='col-6 text-left'>{hours.monday}</dd>
            <dt className='col-6 text-right'>Tuesday</dt>
            <dd className='col-6 text-left'>{hours.tuesday}</dd>
            <dt className='col-6 text-right'>Wednesday</dt>
            <dd className='col-6 text-left'>{hours.wednesday}</dd>
            <dt className='col-6 text-right'>Thursday</dt>
            <dd className='col-6 text-left'>{hours.thursday}</dd>
            <dt className='col-6 text-right'>Friday</dt>
            <dd className='col-6 text-left'>{hours.friday}</dd>
            <dt className='col-6 text-right'>Saturday</dt>
            <dd className='col-6 text-left'>{hours.saturday}</dd>
          </dl>
        </div>
      ) : (
        ''
      )}
      {props.iframe ? (
        <div className='map'>
          <iframe
            src={props.iframe}
            frameBorder='0'
            style={{
              width: '100%',
              height: '16em',
            }}
            title={props.businessName}
          />
        </div>
      ) : (
        ''
      )}
      {props.debug ? (
        <div>
          <p>Here are the props I received:</p>
          <pre>{JSON.stringify(props, undefined, 4)}</pre>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

BusinessLocation.propTypes = {
  address: PropTypes.object,
  businessName: PropTypes.string,
  debug: PropTypes.bool,
  hours: PropTypes.object,
  iframe: PropTypes.string,
  phone: PropTypes.string,
  preaction: PropTypes.object.isRequired,
}

BusinessLocation.extensionType = 'block'
BusinessLocation.label = 'Business Location'
BusinessLocation.defaultProps = {
  address: {
    street: '',
    city: '',
    state: '',
    zip: '',
  },
  businessName: '',
  hours: {
    sunday: '',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
  },
  iframe: '',
  phone: '',
  debug: false,
}

function Settings(props) {
  // DESTRUCTURE PROPS
  const { propsData, getPropsDataValueHandler } = props
  // CALLBACKS
  const getAddressValueHandler = React.useCallback(
    (key) => {
      return (value) => {
        const address = JSON.parse(JSON.stringify(propsData.address))
        address[key] = value
        getPropsDataValueHandler('address')(address)
      }
    },
    [propsData, getPropsDataValueHandler]
  )
  const getHoursValueHandler = React.useCallback(
    (key) => {
      return (value) => {
        const hours = JSON.parse(JSON.stringify(propsData.hours))
        hours[key] = value
        getPropsDataValueHandler('hours')(hours)
      }
    },
    [propsData, getPropsDataValueHandler]
  )
  // RENDER
  return (
    <div>
      <h6>Business Location Settings</h6>
      <hr className='mb-3' />
      <Input
        label='Business Name'
        value={props.propsData.businessName}
        valueHandler={props.getPropsDataValueHandler('businessName')}
      />
      <Input
        type='tel'
        label='Phone'
        value={props.propsData.phone}
        valueHandler={props.getPropsDataValueHandler('phone')}
      />
      <Card header='Address' headerTheme='green' className='mb-3'>
        <Input
          label='Street'
          value={props.propsData.address.street}
          valueHandler={getAddressValueHandler('street')}
        />
        <Input
          label='City'
          value={props.propsData.address.city}
          valueHandler={getAddressValueHandler('city')}
        />
        <Input
          label='State'
          value={props.propsData.address.state}
          valueHandler={getAddressValueHandler('state')}
        />
        <Input
          label='Postal Code'
          value={props.propsData.address.zip}
          valueHandler={getAddressValueHandler('zip')}
        />
      </Card>
      <Card header='Hours' headerTheme='yellow' className='mb-3'>
        <Input
          label='Sunday'
          value={props.propsData.hours.sunday}
          valueHandler={getHoursValueHandler('sunday')}
        />
        <Input
          label='Monday'
          value={props.propsData.hours.monday}
          valueHandler={getHoursValueHandler('monday')}
        />
        <Input
          label='Tuesday'
          value={props.propsData.hours.tuesday}
          valueHandler={getHoursValueHandler('tuesday')}
        />
        <Input
          label='Wednesday'
          value={props.propsData.hours.wednesday}
          valueHandler={getHoursValueHandler('wednesday')}
        />
        <Input
          label='Thursday'
          value={props.propsData.hours.thursday}
          valueHandler={getHoursValueHandler('thursday')}
        />
        <Input
          label='Friday'
          value={props.propsData.hours.friday}
          valueHandler={getHoursValueHandler('friday')}
        />
        <Input
          label='Saturday'
          value={props.propsData.hours.saturday}
          valueHandler={getHoursValueHandler('saturday')}
        />
      </Card>
      <Input
        type='url'
        label='Iframe URL'
        value={props.propsData.iframe}
        valueHandler={props.getPropsDataValueHandler('iframe')}
      />
      <Checkbox
        label='Debug'
        checked={!!props.propsData.debug}
        valueHandler={props.getPropsDataValueHandler('debug')}
      />
    </div>
  )
}

Settings.propTypes = {
  propsData: PropTypes.object.isRequired,
  getPropsDataValueHandler: PropTypes.func.isRequired,
}

BusinessLocation.Settings = Settings

export { BusinessLocation }
