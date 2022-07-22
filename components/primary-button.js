export default function PrimaryButton(props) {

  const { type, children, ...rest } = props
  const className="px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-500 w-fit rounded-lg text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-violet-600 font-semibold mr-40"

  if(type === "link") {
    return <a {...rest} className={className}>{children}</a>
  } else {
    return <button {...rest} className={className}>{children}</button>
  }
}
