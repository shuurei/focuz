import { useCounterStore } from '../stores/useCounterStore'
import Button from '@/components/ui/button'

export default function IncrementCounterButton() {
    const increment = useCounterStore((s) => s.increment);

    return (
        <Button
            variant='green'
            onClick={increment}
        >Increment</Button>
    );
}