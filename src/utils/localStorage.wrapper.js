class LocalStorage {
  constructor(key) {
    this.key = key;
  }
  /**
   * @description 로컬스토리지에서 값을 받는다
   * @returns {string} value
   */
  get() {
    const value = localStorage.getItem(this.key);
    return value;
  }
  /**
   * @description 로컬스토리지에서 값을 세팅한다
   * @param {string} value
   * @returns null
   */
  set(value) {
    localStorage.setItem(this.key, value);
  }
  /**
   * @description 로컬스토리지에서 값을 제거한다
   */
  remove() {
    localStorage.removeItem(this.key);
  }
}

export const authToken = new LocalStorage("insta-login-token");
