import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '@preaction/bootstrap-clips'
import { Checkbox, Input } from '@preaction/inputs'

function BusinessLocationSettings(props) {
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

BusinessLocationSettings.propTypes = {
  propsData: PropTypes.object.isRequired,
  getPropsDataValueHandler: PropTypes.func.isRequired,
}

export default BusinessLocationSettings
