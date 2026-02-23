import Button from '@/components/ui/button';
import { useCounterStore } from '../stores/useCounterStore'

export default function ResetCounterButton() {
    const count = useCounterStore((s) => s.count);
    const reset = useCounterStore((s) => s.reset);

    return (
        <Button
            variant='red'
            filled
            disabled={count == 0}
            onClick={reset}
        >Reset</Button>
    );
}