import { shuffle, pause } from 'utils'

export const loadUser = async (): Promise<IUserInfo> => 
({
  firstname: 'Foo',
  lastname: 'Bar',
  age: 30
})

const colors = [
  '#396AB1',
  '#DA7C30',
  '#3E9651',
  '#CC2529',
  '#535154',
  '#6B4C9A',
  '#922428',
  '#948B3D',
]

export const loadList = async (): Promise<ListItem[]> => {
  await pause()
  const list = new Array(1000).fill(0).map((_, idx) => ({
    number: idx + 1,
    color: colors[idx % colors.length]
  }))
  return shuffle(list)
}

export type IUserInfo = {
  firstname?: string
  lastname: string
  age: number
}

export type ListItem = {
  number: number
  color: string
}
