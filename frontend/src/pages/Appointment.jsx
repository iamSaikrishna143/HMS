/* eslint-disable no-unused-vars */
import React from 'react'
import AppointmentForm from '../components/AppointmentForm'
import Hero from '../components/Hero'

const Appointment = () => {
  return (
    <>
      <Hero title={"Schedule Ypur Appointment | Medical Medplus"}
      imageUrl={"/signin.png"}/>
      <AppointmentForm />
    </>
  )
}

export default Appointment