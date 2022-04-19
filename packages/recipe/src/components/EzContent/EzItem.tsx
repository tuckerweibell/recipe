import {Item} from '@react-stately/collections';
import {ItemProps} from '@react-types/shared/src/index';

const EzItem: <T>(props: ItemProps<T>) => React.ReactElement = Item;

export default EzItem;
