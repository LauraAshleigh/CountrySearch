import React from 'react'
import './IntegrationSelect.css'
import Select from 'react-select'
import Typography from '@material-ui/core/Typography'
import NoSsr from '@material-ui/core/NoSsr'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'

function NoOptionsMessage(props) {
  return (
    <Typography color="textSecondary" className='no-options-message' {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { TextFieldProps },
  } = props;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  const { innerProps = {}, children } = props;
  return (
    <Typography color="textSecondary" className='placeholder' {...innerProps}>
      {children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className='value-container'>{props.children}</div>;
}

function Menu(props) {
  return (
    <Paper square className='paper' {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

export default function IntegrationReactSelect(props) {

  const selectStyles = {
    input: base => ({
      ...base,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  return (
    <div className='root select-search-bar'>
      <NoSsr>
        <Select
          styles={selectStyles}
          inputId="react-select-single"
          TextFieldProps={{
            InputLabelProps: {
              htmlFor: 'react-select-single',
              shrink: true,
            },
          }}
          placeholder={props.placeholder}
          options={props.suggestions}
          components={components}
          value={props.selectValue}
          onChange={props.onHandleChange}
        />
      </NoSsr>
    </div>
  );
}