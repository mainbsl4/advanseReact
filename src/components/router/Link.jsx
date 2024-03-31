
export default function Link({route}) {
  return (
    <li><a href={route.path}>{route.name}</a></li>
  )
}
