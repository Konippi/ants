import React, {ChangeEvent, FC, memo, useEffect, useState} from "react";
import { ProjectList } from ".";
import { BaseInput } from "../atoms";
import { Project } from "../../client";

type Props = {
    projects?: Array<Project>;
}

const ProjectPageBottomList: FC<Props> = memo(function projectPageBottomList(props: Props) {
    const {projects} = props;

    const [selectedProjects, setSelectedProject] = useState(projects);
    const [searchWord, setSearchWord] = useState("");

    // 検索窓が変化した時の処理
    const handleChangeSearchWord = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchWord(event.target.value);
    };

    // プロジェクト名に検索窓の文字列が含まれるプロジェクトを抽出
    useEffect(() => {
        const extractedProjects = projects?.filter(project =>
            // 小文字にして判定 PRoject=project
            project.name?.toLowerCase().includes(searchWord.toLowerCase())
        );
        setSelectedProject(extractedProjects)
    }, [projects, searchWord]);
    
    return (
        <div className="flex justify-center flex-col w-full my-10">
            <div className="w-[500px] mb-6">
                <BaseInput
                    placeholder="Search Project"
                    value={searchWord}
                    onChange={handleChangeSearchWord}
                />
            </div>
            <ProjectList items={selectedProjects} />
        </div>
    );
});

export default ProjectPageBottomList;