export class Post {
  constructor(
    public id: number,
    public title: string,
    public text: string,
    public category?: string,
    public tag?: string
  ) { }
}
