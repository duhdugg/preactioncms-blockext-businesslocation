import React from 'react'
import PropTypes from 'prop-types'

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

export default BusinessLocation
