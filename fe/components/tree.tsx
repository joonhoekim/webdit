import { NodeService } from "@/service/NodeService";
import { Tree } from "primereact/tree";
import { TreeNode } from "primereact/treenode";
import { useEffect, useState } from "react";

export default function () {

    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <>
            <div className="card flex flex-wrap justify-content-center gap-5">
                <Tree value={nodes} filter filterMode="lenient" filterPlaceholder="Lenient Filter" className="w-full md:w-30rem" />
                <Tree value={nodes} filter filterMode="strict" filterPlaceholder="Strict Filter" className="w-full md:w-30rem" />
            </div>
        </>
    )
}