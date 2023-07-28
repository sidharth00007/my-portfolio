import { createBoard } from '@wixc3/react-board';
import { Contact } from '../../../components/contact/contact';

export default createBoard({
    name: 'Contact',
    Board: () => <Contact />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasWidth: 684,
    },
});
