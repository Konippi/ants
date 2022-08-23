import {FC, memo} from "react";
import { ImageIcon } from "../atoms";
import { BsChevronRight } from "react-icons/bs";

type Props = {
    item: number;
}

const ProjectListItem: FC<Props> = memo(function projectListItem(props: Props) {
    const {item} = props;
    return (
      <div className="shadow-md hover:shadow-none bg-gray-300 hover:bg-gray-200 w-full flex space-x-3 items-center px-3 py-3 rounded-md mb-4">
        <div className="w-[8%]">
            <ImageIcon image="sample"/>
        </div>
        <div className="w-[84%]">
            <h2 className="ml-14">sample project</h2>
        </div>
        <div className="w-[8%] flex justify-end">
            <BsChevronRight/>
        </div>
      </div>
    );
});

export default ProjectListItem;