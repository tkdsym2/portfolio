import unified from 'unified';
import parse from 'remark-parse';
import vfile from 'to-vfile';
import toHAST from 'mdast-util-to-hast';
import Debug from 'debug';

const debug = Debug('utils:convertMD');

const convertMD = file => {
    debug(file);
    const filePath = `../projects/${file}.md`;
    const tree = unified()
        .use(parse)
        .parse(vfile.readSync(filePath, 'utf8'));
    debug(toHAST(tree));
    return toHAST(tree);
};

export default convertMD;
