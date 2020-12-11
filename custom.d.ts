type RootState = {
 recordList: RecordItem[],
 tagList: Tag[],
 currentTag?: Tag,
 createRecordError: Error | null,
}
type RecordItem = {
  tags: Tag[],
  notes: string;
  type: string;
  amount: number;
  createdAt?: string;
}

type Tag = {
  id: string;
  name: string;
}
