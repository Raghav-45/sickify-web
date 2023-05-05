import React, { useState } from 'react'

export const BadgeButton = ((props) => {
  const Name = props.name
  const Colour = props.colour
  const [isSelected, setIsSelected] = useState(false)
  return (
    <span onClick={() => {setIsSelected(true)}} class={`inline-flex items-center text-xs font-medium mr-2 px-1.5 py-0.5 rounded-full ${Colour?.bg ?? 'bg-blue-100'} ${Colour?.text ?? 'text-blue-800'} transition-all `}>
      <p className='flex mx-1 align-middle'>{Name ?? 'Default'}</p>
      <button type="button" class={`inline-flex items-center p-0 text-sm text-gray-400 bg-transparent rounded-full hover:text-gray-900 transition-all w-0 `} style={{width: isSelected && '14px'}} data-dismiss-target="#badge-dismiss-dark" aria-label="Remove" onClick={() => setTimeout(() => setIsSelected(false), 100)}>
        <svg aria-hidden="true" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </span>
  )
})