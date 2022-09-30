// import { Fragment } from "react"; ----> No es necesario hoy en día, pero es útil.
import PropTypes from 'prop-types'


export const FirstApp = ({ title, subTitle }) => {


  return (
    <>
      <h1>{title}</h1>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <p>{subTitle}</p>
    </>
  )
}

FirstApp.propTypes = {

  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number,

}

/*

<Fragmento></Fragmento> === <></>

*/