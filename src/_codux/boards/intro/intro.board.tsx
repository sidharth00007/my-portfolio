import { createBoard } from '@wixc3/react-board';
import { Intro } from '../../../components/intro/intro';

export default createBoard({
    name: 'Intro',
    Board: () => <Intro />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
