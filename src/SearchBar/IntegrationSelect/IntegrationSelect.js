import React from 'react'
import './IntegrationSelect.css'
// import PropTypes from 'prop-types'
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
  
  // NoOptionsMessage.propTypes = {
  //   children: PropTypes.node,
  //   innerProps: PropTypes.object.isRequired,
  //   selectProps: PropTypes.object.isRequired,
  // };
  
  function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
  }
  
  // inputComponent.propTypes = {
  //   inputRef: PropTypes.oneOfType([
  //     PropTypes.func,
  //     PropTypes.shape({
  //       current: PropTypes.any.isRequired,
  //     }),
  //   ]),
  // };
  
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
  
  // Control.propTypes = {
  //   children: PropTypes.node,
  //   innerProps: PropTypes.shape({
  //     onMouseDown: PropTypes.func.isRequired,
  //   }).isRequired,
  //   innerRef: PropTypes.oneOfType([
  //     PropTypes.oneOf([null]),
  //     PropTypes.func,
  //     PropTypes.shape({
  //       current: PropTypes.any.isRequired,
  //     }),
  //   ]).isRequired,
  //   selectProps: PropTypes.object.isRequired,
  // };
  
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
  
  // Option.propTypes = {
  //   children: PropTypes.node,
  //   innerProps: PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     key: PropTypes.string.isRequired,
  //     onClick: PropTypes.func.isRequired,
  //     onMouseMove: PropTypes.func.isRequired,
  //     onMouseOver: PropTypes.func.isRequired,
  //     tabIndex: PropTypes.number.isRequired,
  //   }).isRequired,
  //   innerRef: PropTypes.oneOfType([
  //     PropTypes.oneOf([null]),
  //     PropTypes.func,
  //     PropTypes.shape({
  //       current: PropTypes.any.isRequired,
  //     }),
  //   ]).isRequired,
  //   isFocused: PropTypes.bool.isRequired,
  //   isSelected: PropTypes.bool.isRequired,
  // };
  
  function Placeholder(props) {
    const { innerProps = {}, children } = props;
    return (
      <Typography color="textSecondary" className='placeholder' {...innerProps}>
        {children}
      </Typography>
    );
  }
  
  // Placeholder.propTypes = {
  //   children: PropTypes.node,
  //   innerProps: PropTypes.object,
  //   selectProps: PropTypes.object.isRequired,
  // };
  
  function SingleValue(props) {
    return (
      <Typography {...props.innerProps}>
        {props.children}
      </Typography>
    );
  }
  
  // SingleValue.propTypes = {
  //   children: PropTypes.node,
  //   innerProps: PropTypes.any.isRequired,
  //   selectProps: PropTypes.object.isRequired,
  // };
  
  function ValueContainer(props) {
    return <div className='value-container'>{props.children}</div>;
  }
  
  // ValueContainer.propTypes = {
  //   children: PropTypes.node,
  //   selectProps: PropTypes.object.isRequired,
  // };
  
  function Menu(props) {
    return (
      <Paper square className='paper' {...props.innerProps}>
        {props.children}
      </Paper>
    );
  }
  
  // Menu.propTypes = {
  //   children: PropTypes.element.isRequired,
  //   innerProps: PropTypes.object.isRequired,
  //   selectProps: PropTypes.object.isRequired,
  // };
  
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