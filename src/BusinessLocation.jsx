import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '@preaction/bootstrap-clips'
import { Checkbox, Input } from '@preaction/inputs'

class BusinessLocation extends React.Component {
  render() {
    let address = this.props.address || {}
    let hours = this.props.hours || {}
    let phone = this.props.phone || ''
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
          <strong>{this.props.businessName}</strong>
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
        {this.props.iframe ? (
          <div className='map'>
            <iframe
              src={this.props.iframe}
              frameBorder='0'
              style={{
                width: '100%',
                height: '16em',
              }}
              title={this.props.businessName}
            />
          </div>
        ) : (
          ''
        )}
        {this.props.debug ? (
          <div>
            <p>Here are the this.props I received:</p>
            <pre>{JSON.stringify(this.props, undefined, 4)}</pre>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
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

class Settings extends React.Component {
  getAddressValueHandler(key) {
    return (value) => {
      const address = JSON.parse(JSON.stringify(this.props.propsData.address))
      address[key] = value
      this.props.getPropsDataValueHandler('address')(address)
    }
  }

  getHoursValueHandler(key) {
    return (value) => {
      const hours = JSON.parse(JSON.stringify(this.props.propsData.hours))
      hours[key] = value
      this.props.getPropsDataValueHandler('hours')(hours)
    }
  }

  render() {
    return (
      <div>
        <h6>Business Location Settings</h6>
        <hr className='mb-3' />
        <Input
          label='Business Name'
          value={this.props.propsData.businessName}
          valueHandler={this.props.getPropsDataValueHandler('businessName')}
        />
        <Input
          type='tel'
          label='Phone'
          value={this.props.propsData.phone}
          valueHandler={this.props.getPropsDataValueHandler('phone')}
        />
        <Card header='Address' headerTheme='green' className='mb-3'>
          <Input
            label='Street'
            value={this.props.propsData.address.street}
            valueHandler={this.getAddressValueHandler('street')}
          />
          <Input
            label='City'
            value={this.props.propsData.address.city}
            valueHandler={this.getAddressValueHandler('city')}
          />
          <Input
            label='State'
            value={this.props.propsData.address.state}
            valueHandler={this.getAddressValueHandler('state')}
          />
          <Input
            label='Postal Code'
            value={this.props.propsData.address.zip}
            valueHandler={this.getAddressValueHandler('zip')}
          />
        </Card>
        <Card header='Hours' headerTheme='yellow' className='mb-3'>
          <Input
            label='Sunday'
            value={this.props.propsData.hours.sunday}
            valueHandler={this.getHoursValueHandler('sunday')}
          />
          <Input
            label='Monday'
            value={this.props.propsData.hours.monday}
            valueHandler={this.getHoursValueHandler('monday')}
          />
          <Input
            label='Tuesday'
            value={this.props.propsData.hours.tuesday}
            valueHandler={this.getHoursValueHandler('tuesday')}
          />
          <Input
            label='Wednesday'
            value={this.props.propsData.hours.wednesday}
            valueHandler={this.getHoursValueHandler('wednesday')}
          />
          <Input
            label='Thursday'
            value={this.props.propsData.hours.thursday}
            valueHandler={this.getHoursValueHandler('thursday')}
          />
          <Input
            label='Friday'
            value={this.props.propsData.hours.friday}
            valueHandler={this.getHoursValueHandler('friday')}
          />
          <Input
            label='Saturday'
            value={this.props.propsData.hours.saturday}
            valueHandler={this.getHoursValueHandler('saturday')}
          />
        </Card>
        <Input
          type='url'
          label='Iframe URL'
          value={this.props.propsData.iframe}
          valueHandler={this.props.getPropsDataValueHandler('iframe')}
        />
        <Checkbox
          label='Debug'
          checked={!!this.props.propsData.debug}
          valueHandler={this.props.getPropsDataValueHandler('debug')}
        />
      </div>
    )
  }
}

Settings.propTypes = {
  propsData: PropTypes.object.isRequired,
  getPropsDataValueHandler: PropTypes.func.isRequired,
}

BusinessLocation.Settings = Settings

export { BusinessLocation }
