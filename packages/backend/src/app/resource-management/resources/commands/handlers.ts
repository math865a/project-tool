import { CreateResourceHandler } from './create-resource';
import { UpdateResourceHandler } from './update-resource';
import { DeleteResourceHandler } from './delete-resource';

export const commandHandlers = [
    CreateResourceHandler,
    UpdateResourceHandler,
    DeleteResourceHandler,
];
