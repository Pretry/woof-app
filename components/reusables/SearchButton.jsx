import React from 'react'
import classes from "@/components/reusables/Button.module.css"

export default function SearchButton({children, style}) {
  return (

  <button className="bg-salmon rounded-md border-0 md:text-lg py-2 w-full text-white " type="button">{children}</button>
  )}
