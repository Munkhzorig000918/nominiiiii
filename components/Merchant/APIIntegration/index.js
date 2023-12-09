import { Button } from "../../shared/Button"
import APITable from "./APITable"

const APIIntegration = () => {
    return (
        <div className='w-2/3 bg-white rounded-20 p-5 space-y-10'>
            <div className="space-x-3 flex">
                <Button isActive={true} icon={"ph:key-fill"} text={"Create API Key"} />
                <Button isActive={false} icon={"icon-park-solid:doc-detail"} text={"API Documentation"} />
            </div>
            <APITable />
        </div>
    )
}

export default APIIntegration