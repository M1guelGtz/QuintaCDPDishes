import Loader from "../../../../core/components/Loader"

function Dishes(props: any) {
  return (
    <div>
        {
            props.loader && (
                <Loader />
            )
        }
    </div>
  )
}

export default Dishes