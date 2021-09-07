require 'rails_helper'

RSpec.describe "タスク管理", type: :system do
  it 'トップページが表示されている' do
    visit root_path # rootパスへ移動
    expect(page).to have_content('はじめる'), 'はじめるボタンがトップページに表示されていません' # ページ中に'はじめる'という言葉があるか確認
  end

  it 'タスクページに戻るボタンが表示されている' do
    visit '/tasks'
    expect(page).to have_content('戻る'), 'タスクページに戻るボタンが表示されていません'
  end

  it 'トップページからタスクページに遷移できる' do
    visit root_path
    click_link 'はじめる'
    expect(current_path).to eq('/tasks'), 'タスクページに遷移できていません'
  end

  it 'タスクページからトップページに遷移できる' do
    visit '/tasks'
    click_link '戻る'
    expect(current_path).to eq('/'), 'トップページに遷移できていません'
  end
end
