import { LoadingButton } from '@mui/lab'
import { CircularProgress } from '@mui/material'
import React from 'react'

const SubmitButton = (props) => {
  return (
    <>
      <LoadingButton 
             
             disabled={props.disabled}
             variant={props.variant}
             color={props.color}
             onClick={props.onClick} 
             loading={props.loading} 
             loadingIndicator={<CircularProgress size={20} />}
             type="submit" 
             {...props}
             > 
             {props.text ? props.text : "Submit"} 
   </LoadingButton>
    </>
  )
}

export default SubmitButton
