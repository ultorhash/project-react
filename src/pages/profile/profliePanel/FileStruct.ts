import { ChangeEvent } from "react";

export interface IFileStruct
{
    selected: boolean;
    files: string[];
    chooseFile: (event: ChangeEvent) => void;
}