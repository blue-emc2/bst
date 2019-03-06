class ArticlesController < ApplicationController
  before_action :set_article, only: [:edit, :update, :destroy]

  # GET /articles
  def index
    articles = Article.all
    options = { each_serializer: ArticleSerializer }
    serializable_resource = ActiveModelSerializers::SerializableResource.new(articles, options)

    @articles = serializable_resource.as_json
  end

  # GET /articles/1
  def show
    @article = set_article_json
  end

  # GET /articles/new
  def new
    @article = Article.new
  end

  # GET /articles/1/edit
  def edit
  end

  # POST /articles
  def create
    @article = Article.new(col: article_params[:col])

    # if article_params[:bodys].empty?
      @article.sections << Section.new(photo: article_params[:photo])
    # else
    #   article_params.fetch(:bodys, []).each do |body|
    #     @article.sections << Section.new(body: body)
    #   end
    # end

    if @article.save
      redirect_to @article, notice: 'Article was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /articles/1
  def update
    if @article.update(article_params)
      redirect_to @article, notice: 'Article was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /articles/1
  def destroy
    @article.destroy
    redirect_to articles_url, notice: 'Article was successfully destroyed.'
  end

  private

  def set_article_json
    article = Article.find(params[:id])
    options = { each_serializer: ArticleSerializer }
    serializable_resource = ActiveModelSerializers::SerializableResource.new(article, options)

    serializable_resource.as_json.merge(config: article.config)
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_article
    @article = Article.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def article_params
    params.require(:article).permit(:col, :photo, bodys: [])
  end
end
