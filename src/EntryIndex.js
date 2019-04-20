import { INDEX_KEY } from './constants';

export default class EntryIndex {
  space = null;

  constructor(space) {
    if (space != null) {
      this.space = space.private;
    }
  }

  async entries() {
    if (this.space == null) {
      return null;
    }

    return await this.space.get(INDEX_KEY) || [];
  }

  async add(id) {
    if (this.space == null) {
      return null;
    }

    const entries = await this.entries();
    if (!entries.includes(id)) {
      entries.push(id);
    }
    return await this.space.set(INDEX_KEY, entries);
  }

  async remove(id) {
    if (this.space == null) {
      return null;
    }

    const entries = await this.entries();
    const index = entries.indexOf(id);
    entries.splice(index, 1);
    return await this.space.set(INDEX_KEY, entries);
  }
}

