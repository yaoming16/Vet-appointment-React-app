function FormItem({id, type, placeholder, value, onchange}) {
  return (
    <>
      <div className="mb-5">
        <label htmlFor={id} className="block text-gray-700 uppercase font-bold">{placeholder}</label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onchange(e.target.value)}
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
      </div>
    </>
  )
}

export default FormItem