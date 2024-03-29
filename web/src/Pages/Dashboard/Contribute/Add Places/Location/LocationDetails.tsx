import MapBox from "./MapBox/MapBox";
import { Input, Form } from "@arco-design/web-react"

const FormItem = Form.Item;
const inputStyle = {
    minWidth: '270px',
    width: '100%',
    maxWidth: '400px'
    // height: '40px'
}

const LocationDetails = ({state}: any) => {
    return(
        <>
        <div className="right item">
            <MapBox state={state}/>
            <FormItem 
            style={{marginTop: '15px'}}
            label='Location' 
            field='location_description' 
            tooltip={<div>Username is required </div>} 
            rules={[{ required: true }]}>
                <Input 
                onChange={(e) => state.setLocationDescription(e)}
                style={inputStyle} 
                value='' 
                placeholder='Enter the location of the place' />
            </FormItem>
    
        </div>
        </>
    )
}

export default LocationDetails