import type {Dispatch, SetStateAction} from 'react';

const tipOptions = [
  {
    id: 'tip-05',
    value: .05,
    label: '05%'
  },
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-15',
    value: .15,
    label: '15%'
  },
]
type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip:number
}

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
  return (
    <div>
        <h3 className="text-2xl font-black">Seleccione el porcentaje de propina</h3>

        <form>
            {tipOptions.map(tipOption=> (
                 <div key={tipOption.id}className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input
                        id={tipOption.id}
                        type="radio"
                        name="tip"
                        value={tipOption.value}
                        onChange={e => setTip(Number(+e.target.value))}
                        checked={tip === tipOption.value}
                    />
            </div>
            ))}
           
        </form>

    </div>
  )
}
