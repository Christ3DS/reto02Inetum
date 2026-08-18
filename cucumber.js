module.exports = {
    default: {
        requireModule: ["ts-node/register"],
        require: [
            "src/steps/*.ts",
            "src/hooks/*.ts",
            "src/support/*.ts"
        ],
        paths: [
            "features/*.feature"
        ]
    }
};