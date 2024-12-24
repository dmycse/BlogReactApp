
/**
 * AppLayout component that wraps the children in a div with tailwindcss
 * responsive margin classes.
 *
 * Parent component: App -> src/App.jsx
 */

export const AppLayout = ({children}) => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      {children}
    </div>
  )
}
