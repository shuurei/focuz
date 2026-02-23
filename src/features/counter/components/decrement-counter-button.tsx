import { useCounterStore } from '../stores/useCounterStore'
import Button from '@/components/ui/button'

export default function DecrementCounterButton() {
    const decrement = useCounterStore((s) => s.decrement);

    return (
        <Button
            variant='orange'
            onClick={decrement}
        >Decrement</Button>
    );
}