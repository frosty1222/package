import { Option } from "./pattern.interface";

export const ReturnDesireType = (options: Option[], type: string): Option | undefined => {
    if (options.length === 0)
        return undefined;
    if (type === "")
        return undefined; 
    for (const o of options) {
        if (o.value === type) {
            return o;
        }
    }
    return undefined;
}
