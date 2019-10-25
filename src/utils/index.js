
const Tools = {
    namespace(name) {
        return function (v) {
            return `${name}-${v}`;
        };
    }
};
export const nameSpace = Tools.namespace.bind(Tools);
