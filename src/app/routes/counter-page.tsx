import Button from '@/components/ui/button'
import CounterDisplay from '@/features/counter/components/counter-display'
import DecrementCounterButton from '@/features/counter/components/decrement-counter-button'
import IncrementCounterButton from '@/features/counter/components/increment-counter-button'
import ResetCounterButton from '@/features/counter/components/reset-counter-button'

export default function CounterPage() {
    return (
        <main className='flex flex-col items-center gap-2'>
            <Button
                variant='purple'
                as='link'
                to='/'
                filled
            >Revenir en arrière</Button>

            <CounterDisplay />
            <div className='flex gap-4'>
                <IncrementCounterButton />
                <DecrementCounterButton />
                <ResetCounterButton />
            </div>
        </main>
    );
}