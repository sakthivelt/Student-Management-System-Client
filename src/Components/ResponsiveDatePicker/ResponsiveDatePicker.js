import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { isValid} from 'date-fns';

export default function ResponsiveDatePicker({setDate,defaultValue}) {
  const [value, setValue] = React.useState(defaultValue?new Date(defaultValue):new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
              <DatePicker
          disableFuture
          label="Date of Birth"
          inputFormat={'dd/MM/yyyy'}
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            if(isValid(newValue)){
              setDate(newValue)
            }else{
              setDate('')
            }
          }}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
  );
}
